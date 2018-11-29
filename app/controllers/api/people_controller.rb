class Api::PeopleController < ApplicationController
    include HTTParty
    
    def index
        headers = {
            "Authorization" => "Bearer #{Figaro.env.sl_api_key}",
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        }

        url = "https://api.salesloft.com/v2/people.json?per_page=60"
        @people = HTTParty.get(url, :headers => headers)
        render json: @people
    end

end
