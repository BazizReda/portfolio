import Layout from './components/Layout.js'
import Project1 from './components/Projects/Project1.js';
import Project2 from './components/Projects/Project2.js';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/Projects/ProjectPage.js';
import ContactPage from './components/ContactPage';
import AddTemoignage from './components/AddTemoignage.js';
import TemoignagesList from './components/TemoignageList.js';

function App() {
  console.log('env', process.env)

  return (
      <div className="App">
      <Layout>
        <Routes>
          <Route  path="/" element={<HomePage />} /> 
          <Route path="/ProjectPage" element={<ProjectPage />} /> 
          <Route path="/projet1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/ContactPage" element={<ContactPage />} /> 
          <Route path="/AddTemoignage" element={<AddTemoignage />} /> 
          <Route path="/TemoignageList" element={<TemoignagesList />} /> 
          <Route path='/addTemoignage/:id?' element={<AddTemoignage />} />
        {['/', '/temoignages'].map(path => <Route path={path} key={path} element={<TemoignagesList />} />)}
        </Routes>
      </Layout>

      </div>
  );
}

export default App;
