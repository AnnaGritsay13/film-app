import React from 'react';
import './header.css'

export default function Header() {
        return (
            <header className='header-content'>
                    <a href='index.html' className='href'>Film</a>
                <form>
                    <input type='text' className='search' placeholder='Поиск'/>
                </form>
            </header>
        );
}