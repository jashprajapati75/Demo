import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  Label
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for the table
const sampleData = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', price: '$10.00' },
  { id: 2, name: 'Item 2', description: 'Description for item 2', price: '$15.00' },
  { id: 3, name: 'Item 3', description: 'Description for item 3', price: '$20.00' },
  { id: 4, name: 'Item 4', description: 'Description for item 4', price: '$25.00' },
  { id: 5, name: 'Item 5', description: 'Description for item 5', price: '$30.00' },
];

const TableModal = () => {
  // State variables
  const [modal, setModal] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);
  
  // Toggle modal
  const toggle = () => setModal(!modal);
  
  // Handle row click
  const handleRowClick = (item) => {
    setSelectedRow(item === selectedRow ? null : item);
    setShowTerms(item !== selectedRow);
  };
  
  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  return (
    <div className="container mt-5">
      <Button color="primary" onClick={toggle}>
        Open Modal
      </Button>
      
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Select an Item</ModalHeader>
        <ModalBody style={{ height: '400px', overflow: 'auto', position: 'relative' }}>
          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((item) => (
                <tr 
                  key={item.id} 
                  onClick={() => handleRowClick(item)}
                  className={selectedRow && selectedRow.id === item.id ? 'table-primary' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
        
        {showTerms && (
          <div 
            className="terms-container"
            style={{
                backgroundColor: '#fff',
                padding: '15px',
                borderTop: '1px solid #dee2e6',
                boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
                position: 'absolute',
                bottom: '60px',
                left: 0,
                right: 0,
                zIndex: 10
              }}
          >
            <div className="form-check">
              <Input
                type="checkbox"
                className="form-check-input"
                id="termsCheck"
                checked={termsChecked}
                onChange={handleCheckboxChange}
              />
              <Label className="form-check-label" for="termsCheck">
                I agree to the Terms and Conditions
              </Label>
            </div>
          </div>
        )}
        
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button 
            color="primary" 
            disabled={!termsChecked || !selectedRow}
          >
            Confirm Selection
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TableModal;