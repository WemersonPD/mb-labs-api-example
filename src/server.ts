import App from './App';

const PORT = process.env.PORT;

App.listen(PORT || 2000, () => console.log(`App running at port ${PORT}`));
