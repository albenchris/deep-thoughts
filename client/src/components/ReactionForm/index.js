import React, { useState } from 'react';

const ReactionForm = ({ thoughtId }) => {
    const [reactionBody, setReactionBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = e => {
        if (e.target.value.length <= 280) {
            setReactionBody(e.target.value);
            setCharacterCount(e.target.value.length);
        }
    };

    const handleFormSubmit = async e => {
        e.preventDefault();
        setReactionBody('');
        setCharacterCount(0);
    }

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 /* || error */ ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {/* {error && <span className='ml-2'>Something went wrong...</span>} */}
            </p>
            <form
                className='flex-row justify-center justify-space-between-md align-stretch'
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder='Leave a reaction to this thought...'
                    value={reactionBody}
                    className='form-input col-12 col-md-9'
                    onChange={handleChange}
                ></textarea>

                <button className='btn col-12 col-md-3' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ReactionForm;