class ViewOnGithub {

    constructor( el, username, project ) {

        this.el = document.getElementById( el );
        this.username = username;
        this.project = project;
        this.uri = "https://github.com/" + this.username + "/" + this.project;
        this.insertCss();
        this.buildBar();

        this.el.addEventListener( "click", function( e ) {

            let uri = document.getElementById( "vog-link" ).href;
            window.open( uri );

        });

    }

    insertCss() {

        let head = document.querySelector( "head" );
        let html = "<link rel='stylesheet' type='text/css' href='https://tools.winningweb.co.uk/view-on-github/css/style.css'>";

        head.insertAdjacentHTML( "beforeend", html );

    }

    buildBar() {

        this.el.classList.add( "vog-bar" );
        this.el.innerHTML = "<p id='vog-text'>View on Github</p><a id='vog-link' href='" + this.uri + "' target='_blank'><img src='https://tools.winningweb.co.uk/view-on-github/imgs/github.svg'></a>";

    }

}