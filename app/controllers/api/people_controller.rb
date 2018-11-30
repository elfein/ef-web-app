class Api::PeopleController < ApplicationController
    include HTTParty
    
    def index
        headers = {
            "Authorization" => "Bearer #{Figaro.env.sl_api_key}",
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        }

        url = "https://api.salesloft.com/v2/people.json?per_page=50&page="
        num = 1
        @people = []
        7.times do
            response = HTTParty.get((url + num.to_s), :headers => headers)
            @people << response
            num +=1
        end
        render json: @people
    end

end
