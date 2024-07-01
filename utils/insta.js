export const insta = (container) => {
    

    container.innerHTML = `
   <div class='sk-ww-instagram-story-highlights' data-embed-id='25431236'></div><script src='https://widgets.sociablekit.com/instagram-story-highlights/widget.js' async defer></script>
    `

        function loadScript(src) {
        let script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.append(script);
        }
        loadScript('https://widgets.sociablekit.com/instagram-story-highlights/widget.js')
  };