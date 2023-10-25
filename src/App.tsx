import React, { useEffect, useState } from 'react';

import { BookListing, CreateBookModal } from './components';
import { Button, Toast } from './components/common';
import { useBook, useCommon } from './hooks';

const App = () => {
  const { books } = useBook();
  const { toast, onToggleToast } = useCommon();
  const [isShowModal, toggleBookCreateModal] = useState<boolean>(false);

  useEffect(() => {
    if (toast.isVisible) {
      setTimeout(() => {
        onToggleToast({ ...toast, isVisible: false });
      }, 2000);
    }
  }, [toast.isVisible]);

  return (
    <div id="root">
      <div className="header">
        <h3>Blaze BookStore</h3>
        <Button onClick={() => toggleBookCreateModal(true)}>Add Book</Button>
      </div>

      <BookListing books={books} />

      {isShowModal && (
        <CreateBookModal
          handleCloseBookModal={() => toggleBookCreateModal(false)}
        />
      )}

      {toast.isVisible && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default App;
