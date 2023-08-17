"use client";

interface Props {
  onClick?: () => void;
}

export const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Boop</button>;
};
