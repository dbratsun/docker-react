import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('This is 100% error', () => {
  dummyfunction(); // this should fail
});

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 2958db6bd2db481e0b9abd9a8a569d5c3a128c5c
>>>>>>> 6672d7a313bbcb859d631f8a47222fdc247f3885
