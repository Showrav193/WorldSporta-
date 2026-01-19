
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Scores from './pages/Scores';
import Shop from './pages/Shop';
import Game from './pages/Game';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import { User, NewsArticle, MatchScore, Product, Order, CartItem, SportCategory } from './types';
import { INITIAL_NEWS, INITIAL_SCORES, INITIAL_PRODUCTS } from './constants';

export default function App() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('ws_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Global App State (Simulated Database)
  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('ws_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [scores, setScores] = useState<MatchScore[]>(() => {
    const saved = localStorage.getItem('ws_scores');
    return saved ? JSON.parse(saved) : INITIAL_SCORES;
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ws_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('ws_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('ws_users');
    return saved ? JSON.parse(saved) : [
      { id: '1', username: 'admin', email: 'admin@worldsporta.com', role: 'admin', isBlocked: false, createdAt: new Date().toISOString() }
    ];
  });

  const [cart, setCart] = useState<CartItem[]>([]);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('ws_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('ws_news', JSON.stringify(news));
    localStorage.setItem('ws_scores', JSON.stringify(scores));
    localStorage.setItem('ws_products', JSON.stringify(products));
    localStorage.setItem('ws_orders', JSON.stringify(orders));
    localStorage.setItem('ws_users', JSON.stringify(users));
  }, [news, scores, products, orders, users]);

  // Auth Handlers
  const login = (user: User) => setCurrentUser(user);
  const logout = () => {
    setCurrentUser(null);
    setCart([]);
  };

  // Cart Handlers
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar 
          user={currentUser} 
          onLogout={logout} 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home news={news} scores={scores} />} />
            <Route path="/news" element={<News articles={news} setArticles={setNews} currentUser={currentUser} />} />
            <Route path="/scores" element={<Scores scores={scores} />} />
            <Route path="/shop" element={<Shop products={products} onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} onClear={clearCart} onCheckout={(order) => setOrders([order, ...orders])} user={currentUser} />} />
            <Route path="/orders" element={currentUser ? <OrderHistory orders={orders} user={currentUser} /> : <Navigate to="/login" />} />
            <Route path="/game" element={<Game />} />
            
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login users={users} onLogin={login} />} />
            <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register users={users} setUsers={setUsers} onLogin={login} />} />
            
            <Route 
              path="/admin/*" 
              element={currentUser?.role === 'admin' ? (
                <AdminDashboard 
                  news={news} setNews={setNews} 
                  scores={scores} setScores={setScores}
                  products={products} setProducts={setProducts}
                  orders={orders} setOrders={setOrders}
                  users={users} setUsers={setUsers}
                />
              ) : <Navigate to="/" />} 
            />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">World<span className="text-orange-500">Sporta</span></h3>
              <p className="text-slate-400 text-sm">Your premium destination for everything sports. Real-time updates, quality gear, and amazing content.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#/news" className="hover:text-white transition">Latest News</a></li>
                <li><a href="#/scores" className="hover:text-white transition">Live Scores</a></li>
                <li><a href="#/shop" className="hover:text-white transition">Shop</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white text-xl transition"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-slate-400 hover:text-white text-xl transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-slate-400 hover:text-white text-xl transition"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} WorldSporta Inc. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}
