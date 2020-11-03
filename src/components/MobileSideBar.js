import ContactList from './ContactsList';
import SearchContainer from './SearchContainer';

export const MobileSideBar = ({display, setDisplay, clearFilter, setClearFilter}) => {

    if(display) {
        return (
            <div className="sidenav">
                <SearchContainer setClearFilter={setClearFilter} />
                <ContactList sideBarDisplay={display} setSideBarDisplay={setDisplay} setClearFilter={setClearFilter}/>
            </div>
        )
    }else {
        return (
            <></>
        )
    }
}