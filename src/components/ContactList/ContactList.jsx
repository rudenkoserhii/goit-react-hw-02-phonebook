import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (contacts.map(({ id, name, number }) => <ContactItem key={id} name={name} number={number} onDeleteTransit={onDelete} id={id}/>))
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};