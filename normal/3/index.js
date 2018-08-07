module.exports = () => {
  const urls = [
    'https://www.google.com.hk/search?q=babel-loader+options&oq=babel-loader+options&aqs=chrome..69i57j0l5.6635j0j7&sourceid=chrome&ie=UTF-8#123',
    'https://www.google.com.hk/search?q=babel-loader+options&oq=babel-loader+options&aqs=chrome..69i57j0l5.6635j0j7&sourceid=chrome&ie=UTF-8',
    'https://www.google.com.hk/search',
    'https://www.google.com.hk',
  ];
  const parseUrl = (url) => {
    const mainReg = /^(https?):\/\/((?:\w*\.)*\w*)((?:\/\w*)*)((?:[^#])*)?(#.*)?$/;
    return url.match(mainReg)
  }

  const matchResult = urls.map(v => parseUrl(v));
  console.log(matchResult);
  debugger;
}