import React from 'react';

type Props = { name?: string; placeholder: string; textUpdate: (text: string) => void; error?: string; value?: string };

const Input = (props: Props) => (
	<div className="w-full flex flex-col mb-2.5">
		<input
			className={`rounded mb-0 h-12 px-4 text-black bg-gray border outline-none border-${props.error ? 'pink' : 'bg-blue-100'}`}
			placeholder={props.placeholder}
			onChange={v => props.textUpdate(v.target.value)}
			value={props.value}
			name={props.name}
			required
		/>
		{props.error && <p className="mb-2 text-pink text-sm">{props.error}</p>}
	</div>
);

export default Input;