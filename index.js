* {
    margin: 0;
    padding: 0;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

html{
    scroll-behavior: smooth;
}

p {
    color: blueviolet;
}

/* Transition - buttons and links */

a, btn {
    transition:all 300ms ease; 
}

    /*Desktop Nav */

    nav, .nav-links {
        display: flex;

    }

    nav {
        justify-content: space-around;
        align-items: center;
        height: 17vh;
    }

    .nav-links {
        gap: 2rem;
        list-style: none;
        font-size:  1.5rem;
    }

    a {
        color:#FFC0CB;
        text-decoration:none;
    }

        a:hover {
            color: crimson;
        }

    .logo {
        color:#FFC0CB;
        font-size: 2rem;
    }

    .logo:hover {
        cursor: default;
    }

/*sections*/

sections {
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
}

.section-container {
    display: flex;
}

    /*Profile section*/

    #profile{
        display: flex;
        justify-content: center;
        gap: 5rem;
        height: 80vh;
    }

    .section__pic-container {
        display:flex;
        height: 400px;
        width: 400px;
        margin: auto  0;
    }

    .section__text {
        align-self: center;
        text-align: center;
    }

    .section__text p {
        font-weight: 600;
    }

    .section__text__p1 {
        text-align: center;
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }

    .title {
        font-size: 3rem;
        text-align: center;
    }

    #social-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        gap: 1rem;
    }

/*Icon */
