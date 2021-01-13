<script>
    import { word } from "../js/helloFunc";
    import About from "./About.svelte";
    import { Github, LinkedIn, Dribbble } from "../js/img";
</script>

<main>
    <h1 class="intro">
        {word}, I'm <a href="http://github.com/TLClassless">Ben!</a>
    </h1>
    <h1 class="intro">
        I'm a Web 
        <a href="https://github.com/TLClassless">Developer</a> & 
        <a href="https://dribbble.com/TLClassless">Designer</a> from the North West of England, feel free to 
        <a href="mailto: benbuckley94@gmail.com">get in touch,</a> or check out 
        <a href="portfolio.html">some of my projects</a>
    </h1>
    <div class="links">
        <a href="https://github.com/TLClassless"><img src={Github} alt="github" /></a>
        <a href="https://dribbble.com/TLClassless"><img src={Dribbble} id="dribbble" alt="dribbble" /></a>
        <a href="https://www.linkedin.com/in/ben-buckley-7502ba140/"><img src={LinkedIn} alt="linkedin" /></a>
    </div>
</main>

<style>
    .links img {
        height: 50pt;
    }

    main {
        height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>