import App from './App';

const PORT = process.env.PORT;

const app = App.build();

app.listen(PORT || 2000, () => console.log(`App running at port ${PORT}`));
