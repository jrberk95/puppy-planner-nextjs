import React from "react";

interface ActivityButtonProps {
  name: string;
}

const ActivityButton = (props: ActivityButtonProps) => {
  const { name } = props;

  return <button className="activity-button">{name}</button>;
};