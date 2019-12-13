import React from 'react';

export interface IDemoProps {
  msg: string;
};

export const Demo: React.SFC<IDemoProps> = (props: IDemoProps) => {
  const { msg } = props;
  return (
    <div>{msg}</div>
  );
}
export default Demo;