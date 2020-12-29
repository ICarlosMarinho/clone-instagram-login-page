(function animatePhoneScreen () {

    const phoneScreens = [
        document.getElementById("first-phone-screen"),
        document.getElementById("second-phone-screen"),
        document.getElementById("third-phone-screen"),
        document.getElementById("fourth-phone-screen")
    ];

    const animation = [
        { opacity: 1, offset: 0.2 },
        { opacity: 1, offset: 0.8 },
        { opacity: 0, offset: 0.9 }
    ]

    const animController = {
        duration: 6000,
        iterations: 1,
    }

    const screenAnimations = phoneScreens.map((screen, index) => {
        const screenAnimation = screen.animate(animation, animController);

        if (index) screenAnimation.cancel();

        return screenAnimation;
    });

    let currAnimation = 0;

    setInterval(() => {
        if (isAnimationEnding(screenAnimations[currAnimation])) {

            currAnimation >= 3? currAnimation = 0 : currAnimation++;
            screenAnimations[currAnimation].play();
        }
    }, 500);
})();

function isAnimationEnding(animation) {

    const currProgress = animation.currentTime;
    const duration = animation.effect.getComputedTiming().activeDuration;

    return (currProgress / duration) > 0.7;
}


function changeButtonState () {

    const userInput = document.getElementById("user-input");
    const passwordInput = document.getElementById("password-input");
    const submitBtn = document.getElementById("submit-btn");

    userInput.value.length < 1 || passwordInput.value.length < 6
    ? submitBtn.setAttribute("disabled", "disabled")
    : submitBtn.removeAttribute("disabled");
}
