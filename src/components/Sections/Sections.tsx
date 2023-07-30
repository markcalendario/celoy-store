import React from "react";
import styles from "./Sections.module.scss";

type TSection = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section(props: TSection) {
  const { id, className, children } = props;

  return (
    <section
      id={id}
      className={styles.section + (className ? " " + className : "")}>
      {children}
    </section>
  );
}

type TContainer = {
  children: React.ReactNode;
};

export function SectionContainer(props: TContainer) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

type TTitle = {
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
};

export function SectionTitle(props: TTitle) {
  const { title, description } = props;

  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

type TWrapper = {
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper(props: TWrapper) {
  const { className, children } = props;
  return (
    <div className={styles.wrapper + (className ? " " + className : "")}>
      {children}
    </div>
  );
}
