const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;

//In this code we're not triggering the re render, so in UI values are not getting updated!
//If we want to see the latest changes displayed in the browser in React, we need to set up a state value and we need to trigger a rear ender.
