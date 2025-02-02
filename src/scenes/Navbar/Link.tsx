import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({page, selectedPage, setSelectedPage }: Props) => {
    const lowerCaseVersionOfPage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
    return (
        <AnchorLink
            className={`${selectedPage === lowerCaseVersionOfPage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
            `}
            href={`#${lowerCaseVersionOfPage}`}
            onClick={() => setSelectedPage(lowerCaseVersionOfPage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
