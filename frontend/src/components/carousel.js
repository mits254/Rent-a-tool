import React from 'react';

export default function Carousel(props) {
    return (<div class='demo-container'>
    <div class='carousel'>
      <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'/>
      <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'/>
      <input class='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'/>
      <div class='carousel__controls'>
        <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
          👉
        </label>
      </div>
      <div class='carousel__controls'>
        <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'>
          👈
        </label>
        <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3'>
          👉
        </label>
      </div>
      <div class='carousel__controls'>
        <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-2'>
          👈
        </label>
      </div>
      <div class='carousel__screen'>
        <div class='carousel__track'>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              a
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              b
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              c
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              d
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              e
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              f
            </div>
          </div>
          <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
            <div class='demo-content'>
              g
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};