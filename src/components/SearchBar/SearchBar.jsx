import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
            setSearchQuery(e.target.value)
        }}
        label="Search"
        variant="outlined"
        placeholder="Aerosmith"
        size="small"
        style={{ marginTop: '15px', marginBottom: '15px' }}
        value={searchQuery}
        InputProps={{
            startAdornment: <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>,
        }}
    />
);

export default SearchBar;
