export const changeNavBg = setHeaderBg => {
	window.scrollY >= 50 ? setHeaderBg(true) : setHeaderBg(false);
};
