class WordsController < ApplicationController
  def create
    @dictionary = Dictionary.find(params[:dictionary_id])
    @word = @dictionary.words.build(word_params)
    if @word.save
      redirect_to dictionary_path(@dictionary)
    else
      @words = @dictionary.words
      render "dictionaries/show"
    end
  end

  private

  def word_params
    params.require(:word).permit(:word, :mean)
  end
end
