import { useState } from "react";
import { Popover, PopoverBody, PopoverHeader, Button } from "reactstrap";

const SpendingSheetList = () => {
  const root = document.querySelector(":root");

  console.log(root);

  return (
    <>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover flip target="Popover1" toggle={function noRefCheck() {}}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
      <div>SpendingSheetList</div>
    </>
  );
};

export default SpendingSheetList;
