const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/home'], (req, res) => {
    res.render('layout', {
        pageTitle: 'Home | TeamGloom',
        content: 'pages/index',
        activePath: '/home',
    });
});

app.get('/member', (req, res) => {
    res.render('layout', {
        pageTitle: 'Members | TeamGloom',
        content: 'pages/member',
        activePath: '/member',
    });
});

app.get('/contact', (req, res) => {
    res.render('layout', {
        pageTitle: 'Contact | TeamGloom',
        content: 'pages/contact',
        activePath: '/contact',
    });
});

app.get('/projects', (req, res) => {
    res.render('layout', {
        pageTitle: 'Projects | TeamGloom',
        content: 'pages/projects',
        activePath: '/projects',
    });
});

app.get('/cynexa', (req, res) => {
    res.render('layout', {
        pageTitle: 'CyNexa | TeamGloom',
        content: 'pages/cynexa',
        activePath: '/cynexa',
    });
});

app.get('/xenon', (req, res) => {
    res.render('layout', {
        pageTitle: 'XeNon | TeamGloom',
        content: 'pages/xenon',
        activePath: '/xenon',
    });
});

app.get('/agatha', (req, res) => {
    res.render('layout', {
        pageTitle: 'Agatha | TeamGloom',
        content: 'pages/agatha',
        activePath: '/agatha',
    });
});

app.get('/sidroy', (req, res) => {
    res.render('layout', {
        pageTitle: 'Sidroy | TeamGloom',
        content: 'pages/sidroy',
        activePath: '/sidroy',
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});