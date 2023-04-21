import './App.css';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">What is Parallax Scrolling?</h1>
                <p id="textblock-content">
                This is a Parallax Website.<br/><br/>
                Parallax scrolling is a web design technique in which the website background moves at a slower pace than the foreground. This results in a 3D effect as visitors scroll down the site, adding a sense of depth and creating a more immersive browsing experience.<br/><br/>
                While parallax effects can make websites feel more interactive and engaging, it's important to note that excessive movement within parallax effects can cause harm for those with vestibular disorders. The illusion of movement and depth can cause dizziness or disorientation.<br/><br/>
                This website is inspired by a game called <b>FireWatch !!</b>
                </p>
            </div>
            <footer id='textblock-footer'>Created With 🧡 By&nbsp;<a id="textblock-devsense" href="http://maharshi.lovestoblog.com/">Maharshi</a></footer>
        </div>
    );
}

export default TextBlock;