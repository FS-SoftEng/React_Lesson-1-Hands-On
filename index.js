import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Green');
const color2 = React.createElement('li', {}, 'Blue');
const color3 = React.createElement('li', {}, 'Black');

const music1 = React.createElement('li', {}, 'Worship');
const music2 = React.createElement('li', {}, 'Rock');
const music3 = React.createElement('li', {}, 'Classical');

const food1 = React.createElement('li', {}, 'Mediterranean');
const food2 = React.createElement('li', {}, 'Italian');
const food3 = React.createElement('li', {}, 'American');


const website1 = React.createElement(
    'li',
    {},
    React.createElement('a', { href: 'https://www.google.com' }, 'www.google.com')
  );
  const website2 = React.createElement(
    'li',
    {},
   
    React.createElement(
      'a',
      { href: 'https://www.biblegateway.com' },
      'www.biblegateway.com'
    )
  );
  const website3 = React.createElement(
    'li',
    {},

    React.createElement(
      'a',
      { href: 'https://YouTube.com' },
      'www.YouTube.com'
    )
  );

  ReactDOM.render(

    React.createElement(
      'div',
      {},
      React.createElement('h1', {}, 'My Favorite Things'),
      React.createElement(
        'ul',
        {},
        
        React.createElement(
          'li',
          {},
          'Favorite Colors',
          React.createElement('ol', {}, color1, color2, color3)
        ),
        
        React.createElement(
          'li',
          {},
          'Favorite Music',
          React.createElement('ol', {}, music1, music2, music3)
        ),
        
        React.createElement(
          'li',
          {},
          'Favorite Food',
          React.createElement('ol', {}, food1, food2, food3)
        ),
        
        React.createElement(
          'li',
          {},
          'Favorite Websites',
          React.createElement('ol', {}, website1, website2, website3)
        )
      )
    ),
    document.getElementById('root')
  );

// ReactDOM.render(
//   React.createElement(
//     'ul',
//     {},
//     React.createElement('li', {}, 'Favorite Colors', favoriteColors),
//     React.createElement('li', {}, 'Favorite Music', favoriteMusic),
//     React.createElement('li', {}, 'Favorite Food', favoriteFood),
//     React.createElement('li', {}, 'Favorite Websites', favoriteWebsite)
//   ),
//   document.getElementById('root')
// );


// const favoriteColors= React.createElement(
//     'ul',
//     {},
//     React.createElement('ol', {}, 'Green')
//     );   
//     const favoriteMusic= React.createElement(
        
//         React.createElement()
//     );

//     const favoriteFood= React.createElement(
        
//         React.createElement()
//     );

//     const favoriteWebsites= React.createElement(
        
//         React.createElement()
//     );

// ReactDOM.render(
//     React.createElement(
//         'ol',
//         {},
//         React.createElement('li', {}, '')
//     )
// )


// const website1 = React.createElement('li', {}, 'Green');
// const website2 = React.createElement('li', {}, 'Blue');
// const website3 = React.createElement('li', {}, 'Black');
// const favoriteWebsite = React.createElement('ol', {}, websiteNames);

// const favoriteColors = React.createElement('ol', {}, colorNames);
// const favoriteMusic = React.createElement('ol', {}, musicNames);
// const favoriteFood = React.createElement('ol', {}, foodNames);