import { currentUser } from "@clerk/nextjs/server";
import CArtIcon from "./CArtIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import Logo from "./Logo";
import MenuHeader from "./MenuHeader";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        {/* logo */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu></MobileMenu>
          <Logo></Logo>
        </div>

        {/* navButton */}
        <MenuHeader></MenuHeader>

        {/*  NavAdmin*/}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar></SearchBar>
          <CArtIcon></CArtIcon>
          <FavoriteButton></FavoriteButton>
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
            {!user && <SignIn/>}
            
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
