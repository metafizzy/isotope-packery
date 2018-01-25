/*global requirejs: false*/

// -------------------------- bower -------------------------- //

/*
// with bower components
requirejs.config({
  baseUrl: '../bower_components'
});

requirejs( [ '../js/isotope' ], function( Isotope ) {
  new Isotope( '#basic', {
    masonry: {
      columnWidth: 60
    }
  });
});
// */

// -------------------------- pkgd -------------------------- //

/*
requirejs( [ '../dist/isotope.pkgd.js' ], function( Isotope ) {
  new Isotope( '#basic', {
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 60
    }
  });
});
// */

// -------------------------- bower & jQuery -------------------------- //

/*
requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    jquery: 'jquery/dist/jquery'
  }
})

requirejs( [
    'jquery',
    'isotope/js/isotope',
    'jquery-bridget/jquery.bridget'
  ],
  function( $, Isotope ) {
    $.bridget( 'isotope', Isotope );
    $('#basic').isotope({
      masonry: {
        columnWidth: 60
      }
    });
});

// */

// -------------------------- pkgd & jQuery -------------------------- //

// /*
requirejs.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery'
  }
});

requirejs( [
    'require',
    'jquery',
    '../../bower_components/isotope-layout/dist/isotope.pkgd.js'
  ],
  function( require, $, Isotope ) {
    require( [
      'jquery-bridget/jquery.bridget',
      '../../packery-mode.pkgd.js'
    ],
    function() {
      // Make .isotope() jQuery plugin
      $.bridget( 'isotope', Isotope );
      // init Isotope
      $('#square1').isotope({
        layoutMode: 'packery'
      });
    }
  );
});

// */

