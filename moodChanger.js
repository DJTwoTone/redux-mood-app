window.onload = function() {
    const moodElement = document.querySelector("h1");


    document.querySelector("#angry")
            .addEventListener("click", function() {
                store.dispatch({ type: "ANGRY" });
                const currentMood = store.getState().mood;
                moodElement.innerText = currentMood;
            });
   
            document.querySelector("#shocked")
            .addEventListener("click", function() {
                store.dispatch({ type: "SHOCKED" });
                const currentMood = store.getState().mood;
                moodElement.innerText = currentMood;
            });
            
            document.querySelector("#confused")
            .addEventListener("click", function() {
                store.dispatch({ type: "CONFUSED" });
                const currentMood = store.getState().mood;
                moodElement.innerText = currentMood;
            });

            document.querySelector("#nervous")
            .addEventListener("click", function() {
                store.dispatch({ type: "NERVOUS" });
                const currentMood = store.getState().mood;
                moodElement.innerText = currentMood;
            });

            document.querySelector("#weird")
            .addEventListener("click", function() {
                store.dispatch({ type: "WEIRD" });
                const currentMood = store.getState().mood;
                moodElement.innerText = currentMood;
            });


}