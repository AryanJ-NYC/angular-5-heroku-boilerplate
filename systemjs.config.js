(function (global) {
  System.config({
    map: {
      '@angular': 'node_modules/@angular',
      'rxjs': 'node_modules/rxjs'
    },
    paths: {
      'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
      '@angular/*': {'format': 'cjs'}
    },
    packages: {
      'src': {main: 'main', defaultExtension: 'js'},
      '@angular/core': {main: 'core.umd.min.js'},
      '@angular/common': {main: 'common.umd.min.js'},
      '@angular/compiler': {main: 'compiler.umd.min.js'},
      '@angular/forms': {main: 'forms.umd.min.js'},
      '@angular/http': {main: 'http.umd.min.js'},
      '@angular/platform-browser': {main: 'platform-browser.umd.min.js'},
      '@angular/platform-browser-dynamic': {main:'platform-browser-dynamic.umd.min.js'},
      'rxjs': {defaultExtension: 'js'}
    }
  });
})(this);
