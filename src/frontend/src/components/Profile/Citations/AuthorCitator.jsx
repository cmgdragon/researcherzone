import React from 'react';

const AuthorCitator = ({authors}) => {

    const formatNames = () => {
        const formatted = [];
        for (const {name, surname} of authors) {
            const initials = name.split(' ')
                .reduce((acc, curr) => acc.substring(0, 1) + curr.substring(0, 1), "")
                .toUpperCase();
            
            formatted.push(`${surname} ${initials}`);
        }
        return formatted;
    }

    return (<>
        { authors.length &&
            formatNames().map((name, index) => {          
                return(<React.Fragment key={index}>
                {index < 6 ?
                    <span className="documents__aut-name">{name}</span>
                : undefined}
                {index < 5 && index !== authors.length-1 ? <span>, </span> : undefined}
                {index === 6 ? <span> et al.</span> : undefined}
            </React.Fragment>)
            })
        }
    </>)
}

export default AuthorCitator;