import styles from "./Intro.module.scss";

const Intro = () => {
    return (
        <p className={styles.line}>
            Small worlds, made with CSS animation.
            <br />
            Hover to see them move.
        </p>
    );
};

export default Intro;