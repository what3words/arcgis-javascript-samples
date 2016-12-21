define([], function() {
    // Get the user's w3w API key via prompt
    if (!localStorage.getItem('w3wkey')) {
      localStorage.setItem(
        'w3wkey',
        prompt('What is your w3w API key?')
      );
    }
  return {
    // sign up of for your api key, it is free at http://developer.what3words.com
    key : localStorage.getItem('w3wkey'),
    // password is only needed, if you want to use ArcGIS locators, see http://esri.what3words.com/arcgis-setup
    password: localStorage.getItem('w3w.arcgis.password'),
  };
});
