class DictionariesController < ApplicationController
  def index
    @dictionaries = Dictionary.all
    @dictionary = Dictionary.new
  end

  def new
    @dictionary = Dictionary.new

  end

  def create
    @dictionary = Dictionary.new(dictionary_params)
    binding.pry

    if @dictionary.save
      redirect_to dictionaries_path
    else
      render :new
    end
  end



  def show
    
  end

  private

  def dictionary_params
    params.require(:dictionary).permit(:name)
  end
end
