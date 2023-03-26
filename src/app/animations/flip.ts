import {animate, state, style, transition, trigger} from "@angular/animations";
import {FlipAnimationState} from "../models/flip-animation-state";

export const flip = trigger("flip", [
    state(
        FlipAnimationState.PREVIEW,
        style({
            transform: "none"
        })
    ),
    state(
        FlipAnimationState.DEMO,
        style({
            transform: "rotateY(180deg)"
        })
    ),
    transition(`${FlipAnimationState.PREVIEW} => ${FlipAnimationState.DEMO}`, [animate("400ms")]),
    transition(`${FlipAnimationState.DEMO} => ${FlipAnimationState.PREVIEW}`, [animate("400ms")])
])
