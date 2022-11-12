import React from 'react';
import './index.css';



class Hero extends React.Component {
    constructor() {
        super();
        this.state = {isOpen:false};
        this.changeOpen = this.changeOpen.bind(this);
    }

    changeOpen() {
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        return (
            <section class="w-full min-h-screen bg-white bg-cover bg-full bg-no-repeat" style={{backgroundImage:"url(https://ktpmichigan.com/assets/img/home/landing.png)",backgroundPosition:"0 25px"}}>
                <div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
                    <nav class="md:flex md:items-center md:justify-between">
                        <div class="flex items-center justify-between">
                            <button class="md:hidden" onClick={this.changeOpen}>
                                {this.state.isOpen === true && <span>
                                    <svg class="w-6 h-6 fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                    </svg>
                                </span>}

                                {this.state.isOpen === false && <span>
                                    <svg class="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                                    </svg>
                                </span>}
                            </button>

                            <div>
                                <a class="hidden md:inline text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-blue-700" href="#">KTP Northwestern</a>
                            </div>
                        </div>
                        <div class={(this.state.isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0") + "h-0 absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white top-16 md:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center"}>
                            <a href="#" class="block text-gray-600 transition-colors duration-300 md:px-6 hover:text-blue-500">Home</a>
                            <a href="#" class="block text-gray-600 transition-colors duration-300 md:px-6 hover:text-blue-500">Why KTP</a>
                            <a href="#" class="block text-gray-600 transition-colors duration-300 md:px-6 hover:text-blue-500">Rush</a>
                            <a href="#" class="block text-gray-600 transition-colors duration-300 md:px-6 hover:text-blue-500">Members</a>

                            <button class="w-full p-4 transition-colors duration-300 bg-gray-100 rounded-md md:w-auto md:mx-6 hover:bg-gray-200">
                                <div class="flex items-center justify-center -mx-1">
                                    <p class="mx-1 text-sm text-gray-600">Interest form</p>

                                    <svg clip-rule="evenodd" class="w-6 h-6 mx-1 fill-gray-600" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm13.5 10.75c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-.537 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.075.504-.222l2.116-2.313c.12-.131.179-.296.179-.459 0-.375-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.665c-.131-.116-.293-.173-.455-.173-.379 0-.683.307-.683.682 0 .188.077.374.228.509zm11.772-2.711c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-1.613 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.074.504-.221l2.116-2.313c.12-.131.179-.296.179-.46 0-.374-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.664c-.131-.116-.293-.173-.455-.173-.379 0-.683.306-.683.682 0 .187.077.374.228.509zm11.772-1.639c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75z"/></svg>
                                </div>
                            </button>
                        </div>
                    </nav>

                    <section class="flex items-center flex-1 mb-80 lg:mb-64">
                        <div class="flex flex-col w-full ">
                            <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                                <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 pr-8">
                                    Rush
                                </span>
                                <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
                                    KTP
                                </span>
                            </h1>

                            <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 md:text-xl">
                                Join Northwestern's premiere co-ed technology fraternity
                            </p>

                            <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                                <input id="email" type="text" class="px-6 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" />

                                <button class="px-8 py-3 text-sm font-medium tracking-wide text-white transform capitalize transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                                    Notify Me
                                </button>
                            </div>

                            <p class="mt-8 text-center text-gray-700 text-md md:text-xl">Keep me updated on rush-related events</p>
                        </div>
                    </section>

                    <footer class="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
                        <a href="#" class="text-gray-700 transition-colors duration-300 hover:text-blue-500"></a>

                        <div class="mt-4 -mx-4 md:mt-0">
                            <a href="#" class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500"></a>

                            <a href="#" class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500 hidden">Instagram</a>

                            <a href="#" class="px-4 text-gray-700 transition-colors duration-300 hover:text-blue-500 hidden">LinkedIn</a>
                        </div>
                    </footer>
                </div>
            </section>
        )
    }
}
export default Hero;
