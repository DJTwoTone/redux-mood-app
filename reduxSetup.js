const INITIAL_STATE = { mood: "(´･ω･)…｡oо○" };

function moodSelector(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ANGRY":
            return { ...state, mood: "ლಠ益ಠ)ლ"};

        case "SHOCKED":
            return { ...state, mood: "(ʘ言ʘ╬)" }

        case "CONFUSED":
            return { ...state, mood: "⁀⊙﹏☉⁀" }

        case "NERVOUS":
            return { ...state, mood: "ゞ◎Д◎ヾ" }
            
        case "WEIRD":
            return { ...state, mood: "（´≝◞⊖◟≝｀)" }


        default:
             return state;
    }
}

const store = Redux.createStore(moodSelector);