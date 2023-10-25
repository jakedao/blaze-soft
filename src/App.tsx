import React, { useState } from 'react';

import { BookListing, CreateBookModal } from './components';

const App = () => {
  const [isShowModal, toggleBookCreateModal] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="header">
        <h1>Blaze BookStore</h1>
        <button onClick={() => toggleBookCreateModal(true)}>Add Book</button>
        {isShowModal && (
          <CreateBookModal
            handleCloseBookModal={() => toggleBookCreateModal(false)}
          />
        )}

        <BookListing books={[]} />
      </div>
    </div>
  );
};

export default App;
