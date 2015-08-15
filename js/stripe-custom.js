var handler = StripeCheckout.configure({
  key: 'pk_test_YnfsMbE6yopQSUKuvKZ0UmsL',
  image: '/img/geogeek.jpg',
  token: function(token) {
    // Use the token to create the charge with a server-side script.
    // You can access the token ID with `token.id`
  }
});

// BEGINNING OF TANKS

$('.single.tank.179').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 179',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.179').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 179',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.275').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 275',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.275').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 275',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.519').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 519',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.519').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 519',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.564').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 564',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.564').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 564',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.615').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 615',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.615').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 615',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.652').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 652',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.652').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 652',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.719').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 719',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.719').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 719',
    amount: 5500
  });
  e.preventDefault();
});

$('.single.tank.725').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tank-Top - Color 725',
    amount: 5000,
  });
  e.preventDefault();
});

$('.double.tank.725').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tank-Top - Color 725',
    amount: 5500
  });
  e.preventDefault();
});

// BEGINNING OF TEES

$('.single.tee.179').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 179',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.179').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 179',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.275').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 275',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.275').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 275',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.519').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 519',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.519').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 519',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.564').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 564',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.564').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 564',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.615').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 615',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.615').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 615',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.652').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 652',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.652').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 652',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.719').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 719',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.719').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 719',
    amount: 6500
  });
  e.preventDefault();
});

$('.single.tee.725').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Single-Sided Tee - Color 725',
    amount: 6000,
  });
  e.preventDefault();
});

$('.double.tee.725').on('click', function(e) {
  // Open Checkout with further options
  handler.open({
    name: 'The Mapsmith Shop',
    description: '1 Double-Sided Tee - Color 725',
    amount: 6500
  });
  e.preventDefault();
});
