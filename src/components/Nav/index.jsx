import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BookmarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {

  return (
    <container class="bg-four">
      <button class="h-12 m-4 text-light bg-black rounded-2xl p-2 w-36 flex items-center place-content-center">
        <BookmarkIcon class="w-6 mr-2"/>
        Contratame</button>
    </container>
  );
};

export default Navbar;