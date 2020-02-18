export interface Theme {
	dark: boolean;
	background: string;
	fonts: ThemeFont;
	primaryColor: string;
	secondaryColor: string;
}

interface ThemeFont {
	family: string;
	title: {
		size: string;
	};
	heading: {
		size: string;
	};
	subheading: {
		size: string;
	};
	paragraph: {
		size: string;
	};
}

const baseElements = {
	fonts: {
		family: "Arial",
		title: {
			size: "40px"
		},
		heading: {
			size: "24px"
		},
		subheading: {
			size: "18px"
		},
		paragraph: {
			size: "12px"
		}
	}
};

export const darkTheme: Theme = {
	dark: true,
	background: "#303633",
	fonts: baseElements.fonts,
	primaryColor: "#8BE8CB",
	secondaryColor: "#7EA2AA"
};

export const lightTheme: Theme = {
	dark: false,
	background: "#f7f7f7",
	fonts: baseElements.fonts,
	primaryColor: "#4E8271",
	secondaryColor: "#475C60"
};
