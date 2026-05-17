import styles from "./RedMoon.module.scss";

const RedMoonExperiment = () => {
    return (
        <div className={styles.root} aria-hidden>
            <div className={styles.atmosphere} />
        </div>
    );
}

export default RedMoonExperiment;