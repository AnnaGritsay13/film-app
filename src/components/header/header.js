import React from 'react';
import './header.css'

export default function Header ({onUpdateSearch}) {

   function UpdateSearch(e) {
        const text = e.target.value;
        onUpdateSearch(text);
    }
        return (
            <header className='header-content'>
                    <a href='index.html' className='href'>Film</a>
      
                    <input
                        type='text'
                        className='search'
                    placeholder='Поиск'
                    onChange={UpdateSearch}
                    onKeyUp={(e) => {
                        if (e.code === 'Enter') {
                            e.target.value = ''
                        }
                    }}
                    />
            </header>
        )
}