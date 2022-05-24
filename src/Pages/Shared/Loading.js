import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center  m-20 p-5">
            <div className="w-[200px] h-[200px] border-b-[10px] border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;