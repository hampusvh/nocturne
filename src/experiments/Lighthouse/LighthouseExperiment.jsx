import styles from "./Lighthouse.module.css";

const LighthouseExperiment = () => {
    return (
        <div className={styles.root} aria-hidden>
            <div className={styles.beam} />
        </div>
    );
}

export default LighthouseExperiment;